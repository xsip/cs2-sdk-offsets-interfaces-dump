#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimParamID.hpp"

class animgraphlib_CQuaternionAnimParameter {
    char vTable38[0x18];
    CGlobalSymbol m_name;
    CUtlString m_sComment;
    CUtlString m_group;
    modellib_AnimParamID m_id;
    char pad_39[0x14];
    CUtlString m_componentName;
    char pad_40[0x18];
    bool m_bNetworkingRequested;
    bool m_bIsReferenced;
    char end_pad_41[0x6];
    animgraphlib_AnimParamButton_t m_previewButton;
    animgraphlib_AnimParamNetworkSetting m_eNetworkSetting;
    bool m_bUseMostRecentValue;
    bool m_bAutoReset;
    bool m_bGameWritable;
    bool m_bGraphWritable;
    char end_pad_90[0x4];
    Quaternion m_defaultValue;
    bool m_bInterpolate;
    char end_pad_206[0xf];
};
