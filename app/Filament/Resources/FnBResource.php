<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Models\Transactionfnb;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;
use Filament\Infolists\Components\TextEntry;
use App\Filament\Resources\FnBResource\Pages;
use Filament\Infolists\Components\RepeatableEntry;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\FnBResource\RelationManagers;

class FnBResource extends Resource
{
    protected static ?string $model = Transactionfnb::class;

    public static function getPluralModelLabel(): string
    {
        return 'Food and Beverages';
    }

    protected static ?string $navigationLabel = 'Food and Beverages';

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                TextEntry::make('invoice'),
                TextEntry::make('date_transaction')
                    ->dateTime(),
                TextEntry::make('user.username')
                    ->label('Customer Name'),
                TextEntry::make('theatre.name')
                    ->label('Theatre'),
                TextEntry::make('pickup_time')
                    ->label('Pickup Time'),
                TextEntry::make('payment_total')
                    ->money('IDR'),
                TextEntry::make('payment_method')
                    ->badge()
                    ->Color('info'),
                RepeatableEntry::make('fnbdetails')
                    ->schema([
                        TextEntry::make('menu.name'),
                        TextEntry::make('menu.price')
                            ->money('IDR'),
                        TextEntry::make('quantity')
                            ->numeric()
                    ])
                    ->grid(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('invoice')
                    ->searchable(),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'completed' => 'success',
                        'pending' => 'warning',
                        'expire' => 'danger',
                    })
                    ->sortable()
                    ->searchable(),
                TextColumn::make('date_transaction')
                    ->label('Tanggal')
                    ->dateTime()
                    ->searchable()
                    ->sortable(),
                TextColumn::make('payment_total')
                    ->label('Total')
                    ->money('IDR'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFnBS::route('/'),
        ];
    }
}
