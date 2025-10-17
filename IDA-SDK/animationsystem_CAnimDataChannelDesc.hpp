#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CAnimDataChannelDesc {
    CBufferString m_szChannelClass;
    CBufferString m_szVariableName;
    int32_t m_nFlags;
    int32_t m_nType;
    CBufferString m_szGrouping;
    CBufferString m_szDescription;
    char m_szElementNameArray[0x18];
    char m_nElementIndexArray[0x18];
    char m_nElementMaskArray[0x18];
};
