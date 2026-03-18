#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_fogparams_t.hpp"

class client_sky3dparams_t {
    void **__vftable_0;
    int16_t scale;
    char pad_2488[0x2];
    Vector origin;
    bool bClip3DSkyBoxNearToWorldFar;
    char pad_2489[0x3];
    float32 flClip3DSkyBoxNearToWorldFarOffset;
    client_fogparams_t fog;
    WorldGroupId_t m_nWorldGroupID;
    char end_pad_2490[0x4];
};
