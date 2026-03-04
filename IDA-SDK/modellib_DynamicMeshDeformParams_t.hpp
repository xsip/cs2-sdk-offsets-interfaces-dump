#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_DynamicMeshDeformParams_t {
    float32 m_flTensionCompressScale;
    float32 m_flTensionStretchScale;
    bool m_bRecomputeSmoothNormalsAfterAnimation;
    bool m_bComputeDynamicMeshTensionAfterAnimation;
    bool m_bSmoothNormalsAcrossUvSeams;
    bool m_bEnableEyeBulgeDeformation;
};
