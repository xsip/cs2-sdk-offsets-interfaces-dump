#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CAnimKeyData {
    CBufferString m_name;
    char m_boneArray[0x18];
    char m_userArray[0x18];
    char m_morphArray[0x18];
    int32_t m_nChannelElements;
    char pad_431[0x4];
    char m_dataChannelArray[0x18];
};
