#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CNPCPhysicsHull {
    CGlobalSymbol m_sName;
    modellib_NPCPhysicsHullType_t m_eType;
    float32 m_flCapsuleHeight;
    float32 m_flCapsuleRadius;
    Vector m_vCapsuleCenter1;
    Vector m_vCapsuleCenter2;
    float32 m_flGroundBoxHeight;
    float32 m_flGroundBoxWidth;
    char end_pad_352[0x4];
};
