#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "inv_image_data_t.hpp"

class CInventoryImageData {
    InventoryNodeType_t m_nNodeType;
    char pad_410[0x4];
    CUtlString name;
    inv_image_data_t inventory_image_data;
};
