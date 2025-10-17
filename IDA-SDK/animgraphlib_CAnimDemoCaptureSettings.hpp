#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CAnimDemoCaptureSettings {
    Vector2D m_vecErrorRangeSplineRotation;
    Vector2D m_vecErrorRangeSplineTranslation;
    Vector2D m_vecErrorRangeSplineScale;
    float32 m_flIkRotation_MaxSplineError;
    float32 m_flIkTranslation_MaxSplineError;
    Vector2D m_vecErrorRangeQuantizationRotation;
    Vector2D m_vecErrorRangeQuantizationTranslation;
    Vector2D m_vecErrorRangeQuantizationScale;
    float32 m_flIkRotation_MaxQuantizationError;
    float32 m_flIkTranslation_MaxQuantizationError;
    CUtlString m_baseSequence;
    int32_t m_nBaseSequenceFrame;
    animgraphlib_EDemoBoneSelectionMode m_boneSelectionMode;
    char m_bones[0x18];
    char m_ikChains[0x18];
};
