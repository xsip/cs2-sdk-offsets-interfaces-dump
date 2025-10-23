#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class physicslib_RnHull_t;

class physicslib_CastSphereSATParams_t {
    Vector m_vRayStart;
    Vector m_vRayDelta;
    float32 m_flRadius;
    float32 m_flMaxFraction;
    float32 m_flScale;
    char pad_2425[0x4];
    physicslib_RnHull_t* m_pHull;
};
