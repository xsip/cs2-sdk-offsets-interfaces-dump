#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeVertexMapBuild_t {
    CUtlString m_VertexMapName;
    uint32_t m_nNameHash;
    Color m_Color;
    float32 m_flVolumetricSolveStrength;
    int32_t m_nScaleSourceNode;
    char m_Weights[0x18];
};
