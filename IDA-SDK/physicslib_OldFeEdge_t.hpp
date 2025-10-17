#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_OldFeEdge_t {
    float32 m_flK[3];
    float32 invA;
    float32 t;
    float32 flThetaRelaxed;
    float32 flThetaFactor;
    float32 c01;
    float32 c02;
    float32 c03;
    float32 c04;
    float32 flAxialModelDist;
    float32 flAxialModelWeights[4];
    uint16_t m_nNode[4];
};
