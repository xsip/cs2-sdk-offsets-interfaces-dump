#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_fogparams_t.hpp"

class server_sky3dparams_t {
    void **__vftable_0;
    int16_t scale;
    char pad_4280[0x2];
    Vector origin;
    bool bClip3DSkyBoxNearToWorldFar;
    char pad_4281[0x3];
    float32 flClip3DSkyBoxNearToWorldFarOffset;
    server_fogparams_t fog;
    WorldGroupId_t m_nWorldGroupID;
    char end_pad_4282[0x4];
};
