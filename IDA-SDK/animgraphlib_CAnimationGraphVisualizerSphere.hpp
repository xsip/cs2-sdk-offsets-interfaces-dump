#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimNodeID.hpp"

class animgraphlib_CAnimationGraphVisualizerSphere {
    char vTable64[0x8];
    animgraphlib_CAnimationGraphVisualizerPrimitiveType m_Type;
    modellib_AnimNodeID m_OwningAnimNodePaths[11];
    int32_t m_nOwningAnimNodePathCount;
    char end_pad_65[0x4];
    VectorAligned m_vWsPosition;
    float32 m_flRadius;
    Color m_Color;
    char end_pad_68[0x8];
};
