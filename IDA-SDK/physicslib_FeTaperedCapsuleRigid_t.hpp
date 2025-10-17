#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeTaperedCapsuleRigid_t {
    fltx4 vSphere[2];
    uint16_t nNode;
    uint16_t nCollisionMask;
    uint16_t nVertexMapIndex;
    uint16_t nFlags;
    char end_pad_2436[0x8];
};
