<?php

namespace App\Filament\Resources\FilmsResource\Pages;

use App\Filament\Resources\FilmsResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateFilms extends CreateRecord
{
    protected static string $resource = FilmsResource::class;
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
