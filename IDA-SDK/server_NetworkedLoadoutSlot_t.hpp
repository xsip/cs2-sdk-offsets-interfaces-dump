#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class server_CEconItemView;

class server_NetworkedLoadoutSlot_t {
    server_CEconItemView* pItem;
    uint16_t team;
    uint16_t slot;
    char end_pad_3382[0x4];
};
