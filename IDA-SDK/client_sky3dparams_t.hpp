#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_fogparams_t.hpp"

class client_sky3dparams_t {
    char vTable1675[0x8];
    int16_t scale;
    char pad_1676[0x2];
    Vector origin;
    bool bClip3DSkyBoxNearToWorldFar;
    char pad_1677[0x3];
    float32 flClip3DSkyBoxNearToWorldFarOffset;
    client_fogparams_t fog;
    WorldGroupId_t m_nWorldGroupID;
    char end_pad_1678[0x4];
};
