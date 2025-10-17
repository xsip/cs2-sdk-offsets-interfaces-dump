#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeAntiTunnelProbe_t {
    float32 flWeight;
    uint32_t nFlags;
    uint16_t nProbeNode;
    uint16_t nCount;
    uint32_t nBegin;
    float32 flActivationDistance;
    float32 flCurvatureRadius;
    float32 flBias;
};
