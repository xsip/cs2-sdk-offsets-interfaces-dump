#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CSequenceGroupData {
    char vTable451[0x10];
    CBufferString m_sName;
    uint32_t m_nFlags;
    char pad_452[0x4];
    char m_localSequenceNameArray[0x18];
    char m_localS1SeqDescArray[0x18];
    char m_localMultiSeqDescArray[0x18];
    char m_localSynthAnimDescArray[0x18];
    char m_localCmdSeqDescArray[0x18];
    char m_localBoneMaskArray[0x18];
    char m_localScaleSetArray[0x18];
    char m_localBoneNameArray[0x18];
    CBufferString m_localNodeName;
    char m_localPoseParamArray[0x18];
    KeyValues3 m_keyValues;
    char m_localIKAutoplayLockArray[0x18];
};
