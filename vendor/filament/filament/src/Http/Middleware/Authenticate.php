<?php

namespace Filament\Http\Middleware;

use Filament\Facades\Filament;
use Filament\Models\Contracts\FilamentUser;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Database\Eloquent\Model;

class Authenticate extends Middleware
{
    /**
     * @param  array<string>  $guards
     */
    protected function authenticate($request, array $guards): void
    {
        $guard = Filament::auth();

        if (! $guard->check()) {
            $this->unauthenticated($request, $guards);

            return;
        }

        $this->auth->shouldUse(Filament::getAuthGuard());

        /** @var Model $user */
        $user = $guard->user();

        $panel = Filament::getCurrentPanel();

        if ($user->type !== 'admin') {

            $guard->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();


            abort(403, 'Access denied. Admins only.');
        }

        if ($user instanceof FilamentUser && !$user->canAccessPanel($panel)) {
            $guard->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            abort(403, 'You cannot access this panel.');
        }

        if (!$user instanceof FilamentUser && config('app.env') !== 'local') {
            $guard->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            abort(403, 'Access denied.');
        }
    }

    protected function redirectTo($request): ?string
    {
        return Filament::getLoginUrl();
    }
}
