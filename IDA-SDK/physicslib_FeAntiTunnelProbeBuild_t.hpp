#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeAntiTunnelProbeBuild_t {
    float32 flWeight;
    float32 flActivationDistance;
    float32 flBias;
    float32 flCurvature;
    uint32_t nFlags;
    uint16_t nProbeNode;
    char pad_2426[0x2];
    char targetNodes[0x18];
};
