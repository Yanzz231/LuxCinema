<?php

namespace App\Filament\Resources\TheatreResource\Pages;

use App\Filament\Resources\TheatreResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTheatres extends ListRecords
{
    protected static string $resource = TheatreResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
