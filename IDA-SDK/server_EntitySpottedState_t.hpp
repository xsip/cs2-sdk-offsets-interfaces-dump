#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_EntitySpottedState_t {
    char vTable4129[0x8];
    bool m_bSpotted;
    char pad_4130[0x3];
    uint32_t m_bSpottedByMask[2];
    char end_pad_4131[0x4];
};
