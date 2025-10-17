#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeBoxRigid_t {
    CTransform tmFrame2;
    uint16_t nNode;
    uint16_t nCollisionMask;
    Vector vSize;
    uint16_t nVertexMapIndex;
    uint16_t nFlags;
    char end_pad_2428[0xc];
};
