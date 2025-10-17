#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_CAnimAttachment.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"
#include "animgraphlib_CPoseHandle.hpp"
#include "animgraphlib_CBlendCurve.hpp"

class animgraphlib_AimMatrixOpFixedSettings_t {
    modellib_CAnimAttachment m_attachment;
    animgraphlib_CAnimInputDamping m_damping;
    animgraphlib_CPoseHandle m_poseCacheHandles[10];
    animgraphlib_AimMatrixBlendMode m_eBlendMode;
    float32 m_flMaxYawAngle;
    float32 m_flMaxPitchAngle;
    int32_t m_nSequenceMaxFrame;
    int32_t m_nBoneMaskIndex;
    bool m_bTargetIsPosition;
    bool m_bUseBiasAndClamp;
    char pad_24[0x2];
    float32 m_flBiasAndClampYawOffset;
    float32 m_flBiasAndClampPitchOffset;
    animgraphlib_CBlendCurve m_biasAndClampBlendCurve;
    char pad_25[0x8];
};
