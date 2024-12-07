<?php

namespace App\Filament\Resources\PlaytimeResource\Pages;

use App\Filament\Resources\PlaytimeResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreatePlaytime extends CreateRecord
{
    protected static string $resource = PlaytimeResource::class;
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
