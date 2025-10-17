#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_BakedShadowAssignment_t {
    uint32_t m_nLightHash;
    uint32_t m_nMapHash;
    int8_t m_nShadowChannel;
    char end_pad_2475[0x3];
};
