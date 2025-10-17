#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "physicslib_RnPlane_t.hpp"

class physicslib_FeCollisionPlane_t {
    uint16_t nCtrlParent;
    uint16_t nChildNode;
    physicslib_RnPlane_t m_Plane;
    float32 flStrength;
};
