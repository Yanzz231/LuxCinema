<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Playtime;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Filters\TrashedFilter;
use App\Filament\Resources\PlaytimeResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\PlaytimeResource\RelationManagers;

class PlaytimeResource extends Resource
{
    protected static ?string $model = Playtime::class;
    protected static ?string $navigationGroup = 'Manage';

    protected static ?string $navigationIcon = 'heroicon-o-clock';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TimePicker::make('time')
                    ->datalist([
                        '09:30',
                        '10:30',
                        '11:00',
                        '12:30',
                        '13:00',
                        '13:30',
                        '14:30',
                        '15:00',
                        '16:00',
                        '16:30',
                        '17:30',
                        '18:00',
                        '18:30',
                        '19:30',
                        '20:00',
                        '20:30',
                        '21:30',
                    ])
                    ->required(),
                Select::make('theatres_id')
                    ->relationship('theatre', 'name')
                    ->required(),
                Select::make('films_id')
                    ->relationship('film', 'title')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('index')
                    ->label('No.')
                    ->rowIndex(),
                TextColumn::make('time'),
                TextColumn::make('theatre.name')->searchable(),
                TextColumn::make('film.title')->searchable(),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPlaytimes::route('/'),
            'create' => Pages\CreatePlaytime::route('/create'),
            'edit' => Pages\EditPlaytime::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
