<?php

namespace App\Filament\Resources\FnBResource\Pages;

use App\Filament\Resources\FnBResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFnBS extends ListRecords
{
    protected static string $resource = FnBResource::class;

    protected function getHeaderActions(): array
    {
        return [

        ];
    }
}
