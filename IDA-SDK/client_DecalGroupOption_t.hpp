#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_DecalGroupOption_t {
    char m_hMaterial[0x8];
    CGlobalSymbol m_sSequenceName;
    float32 m_flProbability;
    bool m_bEnableAngleBetweenNormalAndGravityRange;
    char pad_566[0x3];
    float32 m_flMinAngleBetweenNormalAndGravity;
    float32 m_flMaxAngleBetweenNormalAndGravity;
};
