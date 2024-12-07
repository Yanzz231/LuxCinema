<?php

namespace App\Filament\Resources\TheatreResource\Pages;

use App\Filament\Resources\TheatreResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateTheatre extends CreateRecord
{
    protected static string $resource = TheatreResource::class;
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
