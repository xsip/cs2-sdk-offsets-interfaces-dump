#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CAnimGraphNetworkedVariables {
    char _vtable_pad_172[0x8];
    char m_PredNetBoolVariables[0x18];
    char m_PredNetByteVariables[0x18];
    char m_PredNetUInt16Variables[0x18];
    char m_PredNetIntVariables[0x18];
    char m_PredNetUInt32Variables[0x18];
    char m_PredNetUInt64Variables[0x18];
    char m_PredNetFloatVariables[0x18];
    char m_PredNetVectorVariables[0x18];
    char m_PredNetQuaternionVariables[0x18];
    char m_PredNetGlobalSymbolVariables[0x18];
    char m_OwnerOnlyPredNetBoolVariables[0x18];
    char m_OwnerOnlyPredNetByteVariables[0x18];
    char m_OwnerOnlyPredNetUInt16Variables[0x18];
    char m_OwnerOnlyPredNetIntVariables[0x18];
    char m_OwnerOnlyPredNetUInt32Variables[0x18];
    char m_OwnerOnlyPredNetUInt64Variables[0x18];
    char m_OwnerOnlyPredNetFloatVariables[0x18];
    char m_OwnerOnlyPredNetVectorVariables[0x18];
    char m_OwnerOnlyPredNetQuaternionVariables[0x18];
    char m_OwnerOnlyPredNetGlobalSymbolVariables[0x18];
    int32_t m_nBoolVariablesCount;
    int32_t m_nOwnerOnlyBoolVariablesCount;
    int32_t m_nRandomSeedOffset;
    float32 m_flLastTeleportTime;
    char pad_173[0x1298];
};
