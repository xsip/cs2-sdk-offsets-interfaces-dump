#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CAnimEncodeDifference {
    char m_boneArray[0x18];
    char m_morphArray[0x18];
    char m_userArray[0x18];
    char m_bHasRotationBitArray[0x18];
    char m_bHasMovementBitArray[0x18];
    char m_bHasMorphBitArray[0x18];
    char m_bHasUserBitArray[0x18];
};
