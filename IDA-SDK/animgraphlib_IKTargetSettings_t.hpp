#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_IKBoneNameAndIndex_t.hpp"
#include "modellib_AnimParamID.hpp"
#include "modellib_AnimParamID.hpp"

class animgraphlib_IKTargetSettings_t {
    animgraphlib_IKTargetSource m_TargetSource;
    char pad_269[0x4];
    animgraphlib_IKBoneNameAndIndex_t m_Bone;
    modellib_AnimParamID m_AnimgraphParameterNamePosition;
    modellib_AnimParamID m_AnimgraphParameterNameOrientation;
    animgraphlib_IKTargetCoordinateSystem m_TargetCoordSystem;
    char end_pad_270[0x4];
};
