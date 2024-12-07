<?php

namespace App\Filament\Resources\PlaytimeResource\Pages;

use App\Filament\Resources\PlaytimeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPlaytimes extends ListRecords
{
    protected static string $resource = PlaytimeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
