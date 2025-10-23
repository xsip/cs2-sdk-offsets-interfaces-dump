#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_AimCameraOpFixedSettings_t.hpp"

class animgraphlib_CAimCameraUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    animgraphlib_CAnimParamHandle m_hParameterPosition;
    animgraphlib_CAnimParamHandle m_hParameterOrientation;
    animgraphlib_CAnimParamHandle m_hParameterSpineRotationWeight;
    animgraphlib_CAnimParamHandle m_hParameterPelvisOffset;
    animgraphlib_CAnimParamHandle m_hParameterUseIK;
    animgraphlib_CAnimParamHandle m_hParameterCameraOnly;
    animgraphlib_CAnimParamHandle m_hParameterWeaponDepenetrationDistance;
    animgraphlib_CAnimParamHandle m_hParameterWeaponDepenetrationDelta;
    animgraphlib_CAnimParamHandle m_hParameterCameraClearanceDistance;
    char pad_18[0x6];
    animgraphlib_AimCameraOpFixedSettings_t m_opFixedSettings;
    char end_pad_19[0x8];
};
