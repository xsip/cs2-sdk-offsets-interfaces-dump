#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_ExternalPoseSlot_t {
    int16_t m_nNodeIdx;
    char pad_2524[0x6];
    CGlobalSymbol m_slotID;
};
