<?

namespace Classes\Catalog;

/** Сущность - каталог
 *  Обязанность - управление каталогом
 *  (создание, редактирование, удаление)
 */
interface CatalogItem
{
    public function getById(int $id): CatalogItem;

    public function create(array $data): CatalogItem;

    public function change(): CatalogItem;

    public function save(): CatalogItem;

    public function deleteById(): bool;
}

/** Сущность - поле узла
 *  Обязанность - управление узлами каталога
 */
interface CatalogItemField
{

}

/**
 * Сущность - привилегии для каталога
 * Обязанность - создание, проверка, удаление привелегий
 */
interface CatalogPrivileges
{

}

// Обязанность - валидация сущностей каталога
interface CatalogValidator
{
    /**
     * Проверить тип каталога на допустимость
     * @param string $type - тип каталога
     * @return bool
     */
    static function is_type_CItem(string $type): bool;
}


class CItem implements CatalogItem
{
    // Каталог прошел проверку валидатора
    protected $is_valid_catalog = false;

    // ID каталога
    protected $id = null;

    // Имя каталога
    protected $name = null;

    // Тип каталога
    protected $type = null;

    // Данные каталога
    protected $data_json = null;

    public function getById(int $id): CatalogItem
    {
        // TODO: Implement getById() method.
    }

    public function create(array $data): CatalogItem
    {
        if (
            $data['name'] !== null &&
            $data['type'] !== null &&
            is_string($data['name']) &&
            $data['type'] !== null &&
            CValidator::is_type_CItem($data['type']) &&
            $data['id_user'] !== null
        ) {
            $this->name = $data['name'];
            $this->type = $data['type'];
        }

        return $this;
    }

    public function change(): CatalogItem
    {
        // TODO: Implement change() method.
    }

    public function save(): CatalogItem
    {
        // TODO: Implement save() method.
    }

    public function deleteById(): bool
    {
        // TODO: Implement deleteById() method.
    }
}

class CIField implements CatalogItemField
{

}

class CPrivileges implements CatalogPrivileges
{

}

class CValidator implements CatalogValidator
{

    /**
     * Проверить тип каталога на допустимость
     * @param string $type - тип каталога
     * @return bool
     */
    static function is_type_CItem(string $type): bool
    {
        if (
            $type === 'public' ||
            $type === 'private'
        )
            return true;
        else
            return false;
    }
}

