#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class EntitySpottedState_t {
    char _vtable_pad_1050[0x8];
    bool m_bSpotted;
    char pad_1051[0x3];
    uint32_t m_bSpottedByMask[2];
    char end_pad_1052[0x4];
};
