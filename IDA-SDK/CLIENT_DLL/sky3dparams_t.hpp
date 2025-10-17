#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "fogparams_t.hpp"

class sky3dparams_t {
    char _vtable_pad_1113[0x8];
    int16_t scale;
    char pad_1114[0x2];
    Vector origin;
    bool bClip3DSkyBoxNearToWorldFar;
    char pad_1115[0x3];
    float32 flClip3DSkyBoxNearToWorldFarOffset;
    fogparams_t fog;
    WorldGroupId_t m_nWorldGroupID;
    char end_pad_1116[0x4];
};
