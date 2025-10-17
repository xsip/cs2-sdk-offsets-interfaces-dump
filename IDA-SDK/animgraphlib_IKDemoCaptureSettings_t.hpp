#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_IKDemoCaptureSettings_t {
    CUtlString m_parentBoneName;
    animgraphlib_IKChannelMode m_eMode;
    char pad_268[0x4];
    CUtlString m_ikChainName;
    CUtlString m_oneBoneStart;
    CUtlString m_oneBoneEnd;
};
