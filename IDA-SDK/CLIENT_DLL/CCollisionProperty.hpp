#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "VPhysicsCollisionAttribute_t.hpp"

class CCollisionProperty {
    char _vtable_pad_333[0x10];
    VPhysicsCollisionAttribute_t m_collisionAttribute;
    Vector m_vecMins;
    Vector m_vecMaxs;
    char pad_334[0x2];
    uint8_t m_usSolidFlags;
    SolidType_t m_nSolidType;
    uint8_t m_triggerBloat;
    SurroundingBoundsType_t m_nSurroundType;
    uint8_t m_CollisionGroup;
    uint8_t m_nEnablePhysics;
    float32 m_flBoundingRadius;
    Vector m_vecSpecifiedSurroundingMins;
    Vector m_vecSpecifiedSurroundingMaxs;
    Vector m_vecSurroundingMaxs;
    Vector m_vecSurroundingMins;
    Vector m_vCapsuleCenter1;
    Vector m_vCapsuleCenter2;
    float32 m_flCapsuleRadius;
};
