#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_CAnimAttachment.hpp"
#include "modellib_AttachmentHandle_t.hpp"

class animgraphlib_FollowAttachmentSettings_t {
    modellib_CAnimAttachment m_attachment;
    int32_t m_boneIndex;
    modellib_AttachmentHandle_t m_attachmentHandle;
    bool m_bMatchTranslation;
    bool m_bMatchRotation;
    char end_pad_256[0x9];
};
