#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeBuildSphereRigid_t {
    fltx4 vSphere;
    uint16_t nNode;
    uint16_t nCollisionMask;
    uint16_t nVertexMapIndex;
    uint16_t nFlags;
    char end_pad_2434[0x8];
    int32_t m_nPriority;
    uint32_t m_nVertexMapHash;
    uint32_t m_nAntitunnelGroupBits;
    char end_pad_2433[0x4];
};
