<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\Film;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Actions\EditAction;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Actions\DeleteAction;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Infolists\Components\TextEntry;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Infolists\Components\ImageEntry;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\RestoreBulkAction;
use App\Filament\Resources\FilmsResource\Pages;
use Filament\Tables\Actions\ForceDeleteBulkAction;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\FilmsResource\Pages\EditFilms;
use App\Filament\Resources\FilmsResource\Pages\ListFilms;
use App\Filament\Resources\FilmsResource\RelationManagers;
use App\Filament\Resources\FilmsResource\Pages\CreateFilms;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class FilmsResource extends Resource
{
    protected static ?string $model = Film::class;
    protected static ?string $navigationGroup = 'Manage';

    protected static ?string $navigationIcon = 'heroicon-o-film';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required(),
                TextInput::make('synopsis')
                    ->required(),
                TextInput::make('duration')
                    ->required(),
                TextInput::make('rating')
                    ->required(),
                TextInput::make('producer')
                    ->required(),
                Select::make('type')
                    ->required()
                    ->options([
                        '2D' => '2D',
                        '3D' => '3D',
                    ])
                    ->native(false),
                Select::make('genre')
                    ->required()
                    ->multiple()
                    ->options([
                        'Action' => 'Action',
                        'Sci-Fi' => 'Sci-Fi',
                        'Comedy' => 'Comedy',
                        'Drama' => 'Drama',
                        'Horror' => 'Horror',
                        'Romance' => 'Romance',
                        'Thriller' => 'Thriller',
                        'Fantasy' => 'Fantasy',
                        'Adventure' => 'Adventure',
                        'Documentary' => 'Documentary',
                        'Mystery' => 'Mystery',
                        'Crime' => 'Crime',
                        'Biography' => 'Biography',
                        'History' => 'History',
                        'Music' => 'Music',
                        'Family' => 'Family',
                        'Animation' => 'Animation',
                        'War' => 'War',
                        'Western' => 'Western',
                        'Sport' => 'Sport',
                        'Musical' => 'Musical',
                        'Noir' => 'Noir',
                        'Superhero' => 'Superhero',
                        'Political' => 'Political',
                        'Psychological' => 'Psychological',
                        'Survival' => 'Survival',
                        'Paranormal' => 'Paranormal',
                        'Epic' => 'Epic',
                        'Anthology' => 'Anthology',
                        'Silent' => 'Silent',
                        'Experimental' => 'Experimental',
                        'Period' => 'Period',
                        'Satire' => 'Satire',
                        'Coming-of-Age' => 'Coming-of-Age',
                        'Cyberpunk' => 'Cyberpunk',
                        'Steampunk' => 'Steampunk',
                        'Dark Comedy' => 'Dark Comedy',
                        'Slasher' => 'Slasher',
                        'Romantic Comedy' => 'Romantic Comedy',
                        'Teen' => 'Teen',
                        'Martial Arts' => 'Martial Arts',
                        'Disaster' => 'Disaster',
                        'Heist' => 'Heist',
                        'Spy' => 'Spy',
                    ])
                    ->searchable()
                    ->native(false),
                Select::make('status')
                    ->required()
                    ->options([
                        'Up-Coming' => 'Up-Coming',
                        'Now-Showing' => 'Now-Showing',
                    ])
                    ->native(false),
                FileUpload::make('image')
                    ->required()
                    ->preserveFilenames()
                    ->getUploadedFileNameForStorageUsing(
                        fn(TemporaryUploadedFile $file): string => (string)str($file->getClientOriginalName())
                            ->prepend(now()->timestamp),
                    ),
                TextInput::make('director')
                    ->required(),
                TextInput::make('writer')
                    ->required(),
                TextInput::make('cast')
                    ->required(),
                TextInput::make('link_trailers')
                    ->required(),
            ]);
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                TextEntry::make('title'),
                TextEntry::make('synopsis'),
                TextEntry::make('status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'Up-Coming' => 'warning',
                        'Now-Showing' => 'success',
                    }),
                TextEntry::make('type'),
                TextEntry::make('genre'),
                TextEntry::make('director'),
                TextEntry::make('producer'),
                TextEntry::make('cast'),
                TextEntry::make('writer'),
                TextEntry::make('duration'),

                ImageEntry::make('image')
                    ->label('poster'),
                TextEntry::make('link_trailers'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'Up-Coming' => 'warning',
                        'Now-Showing' => 'success',
                    })
                    ->sortable(),
                TextColumn::make('duration'),
                TextColumn::make('rating')
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
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
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFilms::route('/'),
            'create' => Pages\CreateFilms::route('/create'),
            'edit' => Pages\EditFilms::route('/{record}/edit'),
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
