#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_EntitySpottedState_t {
    char vTable1612[0x8];
    bool m_bSpotted;
    char pad_1613[0x3];
    uint32_t m_bSpottedByMask[2];
    char end_pad_1614[0x4];
};
