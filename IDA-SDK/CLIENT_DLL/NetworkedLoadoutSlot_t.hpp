#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class C_EconItemView;

class NetworkedLoadoutSlot_t {
    C_EconItemView* pItem;
    uint16_t team;
    uint16_t slot;
    char end_pad_295[0xbc];
};
