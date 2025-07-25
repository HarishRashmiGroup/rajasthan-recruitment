'use client'
import { 
    Button, 
    IconButton,
    ButtonProps,
    IconButtonProps
} from '@chakra-ui/react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

interface CopyLinkButtonProps {
    url: string;
    variant?: 'desktop' | 'mobile';
}

const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({ 
    url, 
    variant = 'desktop',
    ...props 
}) => {
    const [copied, setCopied] = useState(false);
    // const toast = useToast();

    const handleCopyLink = async (): Promise<void> => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            // toast({
            //     title: "Link copied!",
            //     status: "success",
            //     duration: 2000,
            //     isClosable: true,
            // });
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // toast({
            //     title: "Failed to copy link",
            //     status: "error",
            //     duration: 2000,
            //     isClosable: true,
            // });
        }
    };

    if (variant === 'mobile') {
        return (
            <IconButton
                aria-label="Copy link"
                onClick={handleCopyLink}
                size="md"
                variant="ghost"
                borderRadius="full"
                w="20px"
                h="20px"
                minW="20px"
                flexShrink={0}
                colorScheme={copied ? 'green' : 'gray'}
                _hover={{
                    bg: 'green.100',
                    color: 'green'
                    // transform: 'scale(1.1)'
                }}
                _active={{
                    // transform: 'scale(0.95)'
                }}
                // transition="all 0.2s"
                {...(props as IconButtonProps)}
            >
                {copied ? <FaCheck size={18} /> : <FaCopy size={18} />}
            </IconButton>
        );
    }

    return (
        <Button
            onClick={handleCopyLink}
            variant="outline"
            size="sm"
            gap={2}
            colorScheme={copied ? 'green' : 'gray'}
            _hover={{
                transform: 'translateY(-1px)',
                shadow: 'md'
            }}
            _active={{
                transform: 'translateY(0px)'
            }}
            transition="all 0.2s"
            {...(props as ButtonProps)}
        >
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? 'Copied!' : 'Copy Link'}
        </Button>
    );
};
export default CopyLinkButton;