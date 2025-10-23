#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_VPhysicsCollisionAttribute_t.hpp"

class server_CCollisionProperty {
    char vTable3465[0x10];
    server_VPhysicsCollisionAttribute_t m_collisionAttribute;
    Vector m_vecMins;
    Vector m_vecMaxs;
    char pad_3466[0x2];
    uint8_t m_usSolidFlags;
    client_SolidType_t m_nSolidType;
    uint8_t m_triggerBloat;
    client_SurroundingBoundsType_t m_nSurroundType;
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
