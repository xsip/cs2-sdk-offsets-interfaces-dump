#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_inv_image_data_t.hpp"

class client_CInventoryImageData {
    client_InventoryNodeType_t m_nNodeType;
    char pad_973[0x4];
    CUtlString name;
    client_inv_image_data_t inventory_image_data;
};
