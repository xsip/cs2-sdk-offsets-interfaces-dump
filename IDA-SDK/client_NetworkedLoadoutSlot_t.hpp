#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class client_C_EconItemView;

class client_NetworkedLoadoutSlot_t {
    client_C_EconItemView* pItem;
    uint16_t team;
    uint16_t slot;
    char end_pad_858[0xbc];
};
