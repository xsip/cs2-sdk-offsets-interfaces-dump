#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_CAnimAttachment.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_TwoBoneIKSettings_t {
    animgraphlib_IkEndEffectorType m_endEffectorType;
    char pad_301[0xc];
    modellib_CAnimAttachment m_endEffectorAttachment;
    animgraphlib_IkTargetType m_targetType;
    char pad_302[0xc];
    modellib_CAnimAttachment m_targetAttachment;
    int32_t m_targetBoneIndex;
    animgraphlib_CAnimParamHandle m_hPositionParam;
    animgraphlib_CAnimParamHandle m_hRotationParam;
    bool m_bAlwaysUseFallbackHinge;
    char pad_303[0x7];
    VectorAligned m_vLsFallbackHingeAxis;
    int32_t m_nFixedBoneIndex;
    int32_t m_nMiddleBoneIndex;
    int32_t m_nEndBoneIndex;
    bool m_bMatchTargetOrientation;
    bool m_bConstrainTwist;
    char pad_304[0x2];
    float32 m_flMaxTwist;
    char pad_305[0xc];
};
