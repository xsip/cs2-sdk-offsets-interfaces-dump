#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeVertexMapDesc_t {
    CUtlString sName;
    uint32_t nNameHash;
    uint32_t nColor;
    uint32_t nFlags;
    uint16_t nVertexBase;
    uint16_t nVertexCount;
    uint32_t nMapOffset;
    uint32_t nNodeListOffset;
    Vector vCenterOfMass;
    float32 flVolumetricSolveStrength;
    int16_t nScaleSourceNode;
    uint16_t nNodeListCount;
    char end_pad_2449[0x4];
};
